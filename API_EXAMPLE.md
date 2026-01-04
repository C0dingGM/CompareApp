# 🚀 Live API Example - Building a "Price Alerts" API

Let me show you how to build a complete API from scratch, step-by-step.

## Goal: Create an API to manage price alerts

**Features:**
- POST /api/alerts - Create a new price alert
- GET /api/alerts - Get all alerts for a user
- DELETE /api/alerts/[id] - Delete an alert

---

## STEP 1: Create the Data Store
**File**: `web/lib/alerts-data.ts`

```typescript
// Simple in-memory storage (would be database in production)
export interface PriceAlert {
  id: string;
  userId: string;
  productId: string;
  targetPrice: number;
  currentPrice: number;
  createdAt: string;
  triggered: boolean;
}

// In-memory storage
let alerts: PriceAlert[] = [];

// Helper to generate IDs
let nextId = 1;

export function createAlert(
  userId: string,
  productId: string,
  targetPrice: number,
  currentPrice: number
): PriceAlert {
  const alert: PriceAlert = {
    id: `alert-${nextId++}`,
    userId,
    productId,
    targetPrice,
    currentPrice,
    createdAt: new Date().toISOString(),
    triggered: false
  };
  
  alerts.push(alert);
  return alert;
}

export function getAlertsForUser(userId: string): PriceAlert[] {
  return alerts.filter(a => a.userId === userId);
}

export function deleteAlert(id: string, userId: string): boolean {
  const index = alerts.findIndex(a => a.id === id && a.userId === userId);
  if (index === -1) return false;
  alerts.splice(index, 1);
  return true;
}

export function getAllAlerts(): PriceAlert[] {
  return alerts;
}
```

---

## STEP 2: Create the Main API Route (GET & POST)
**File**: `web/app/api/alerts/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createAlert, getAlertsForUser } from '@/lib/alerts-data';

// GET /api/alerts - Get all alerts for current user
export async function GET(req: NextRequest) {
  try {
    // In real app, get from session/JWT
    const userId = req.nextUrl.searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'userId parameter required' },
        { status: 400 }
      );
    }

    const alerts = getAlertsForUser(userId);

    return NextResponse.json({
      success: true,
      alerts,
      count: alerts.length
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// POST /api/alerts - Create a new alert
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, productId, targetPrice, currentPrice } = body;

    // Validation
    if (!userId || !productId || !targetPrice || !currentPrice) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, productId, targetPrice, currentPrice' },
        { status: 400 }
      );
    }

    if (targetPrice <= 0 || currentPrice <= 0) {
      return NextResponse.json(
        { error: 'Prices must be positive numbers' },
        { status: 400 }
      );
    }

    // Create the alert
    const alert = createAlert(userId, productId, targetPrice, currentPrice);

    return NextResponse.json({
      success: true,
      alert,
      message: 'Price alert created successfully'
    }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

---

## STEP 3: Create the Delete Route (Dynamic Route)
**File**: `web/app/api/alerts/[id]/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { deleteAlert } from '@/lib/alerts-data';

// DELETE /api/alerts/[id] - Delete an alert
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const alertId = params.id;
    const userId = req.nextUrl.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId parameter required' },
        { status: 400 }
      );
    }

    const deleted = deleteAlert(alertId, userId);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Alert not found or unauthorized' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Alert ${alertId} deleted`
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

---

## STEP 4: Create a Status Route
**File**: `web/app/api/alerts/status/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { getAllAlerts } from '@/lib/alerts-data';

// GET /api/alerts/status - Get overall stats
export async function GET() {
  const alerts = getAllAlerts();
  
  const stats = {
    total: alerts.length,
    triggered: alerts.filter(a => a.triggered).length,
    active: alerts.filter(a => !a.triggered).length,
    byUser: {} as Record<string, number>
  };

  // Count alerts per user
  alerts.forEach(a => {
    stats.byUser[a.userId] = (stats.byUser[a.userId] || 0) + 1;
  });

  return NextResponse.json({
    success: true,
    stats,
    timestamp: new Date().toISOString()
  });
}
```

---

## STEP 5: Test the API

### Using cURL:

```bash
# 1. Create an alert
curl -X POST http://localhost:3000/api/alerts \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user123",
    "productId": "1",
    "targetPrice": 39.99,
    "currentPrice": 49.99
  }'

# Response:
# {
#   "success": true,
#   "alert": {
#     "id": "alert-1",
#     "userId": "user123",
#     "productId": "1",
#     "targetPrice": 39.99,
#     "currentPrice": 49.99,
#     "createdAt": "2025-12-03T03:16:37.129Z",
#     "triggered": false
#   },
#   "message": "Price alert created successfully"
# }

# 2. Get all alerts for user
curl "http://localhost:3000/api/alerts?userId=user123"

# Response:
# {
#   "success": true,
#   "alerts": [
#     {
#       "id": "alert-1",
#       "userId": "user123",
#       "productId": "1",
#       "targetPrice": 39.99,
#       "currentPrice": 49.99,
#       "createdAt": "2025-12-03T03:16:37.129Z",
#       "triggered": false
#     }
#   ],
#   "count": 1
# }

# 3. Delete an alert
curl -X DELETE "http://localhost:3000/api/alerts/alert-1?userId=user123"

# Response:
# {
#   "success": true,
#   "message": "Alert alert-1 deleted"
# }

# 4. Get status
curl http://localhost:3000/api/alerts/status

# Response:
# {
#   "success": true,
#   "stats": {
#     "total": 0,
#     "triggered": 0,
#     "active": 0,
#     "byUser": {}
#   },
#   "timestamp": "2025-12-03T03:16:37.129Z"
# }
```

---

## STEP 6: Use from Frontend

**React Component Example**:

```typescript
'use client';
import { useState } from 'react';

export default function PriceAlertForm({ productId, currentPrice }: any) {
  const [targetPrice, setTargetPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const createAlert = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/alerts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user123', // In real app, from session
          productId,
          targetPrice: parseFloat(targetPrice),
          currentPrice
        })
      });

      const data = await response.json();

      if (data.success) {
        alert('Price alert created! We\'ll notify you when price drops.');
        setTargetPrice('');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Failed to create alert');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Set Price Alert</h3>
      <p>Current price: ${currentPrice}</p>
      <input
        type="number"
        value={targetPrice}
        onChange={(e) => setTargetPrice(e.target.value)}
        placeholder="Target price"
        step="0.01"
      />
      <button onClick={createAlert} disabled={loading}>
        {loading ? 'Creating...' : 'Create Alert'}
      </button>
    </div>
  );
}
```

---

## 📁 Final File Structure

```
web/
├── lib/
│   └── alerts-data.ts          # Data storage & logic
├── app/
│   └── api/
│       └── alerts/
│           ├── route.ts         # GET & POST /api/alerts
│           ├── [id]/
│           │   └── route.ts     # DELETE /api/alerts/[id]
│           └── status/
│               └── route.ts     # GET /api/alerts/status
```

---

## 🎯 Key Concepts Demonstrated:

1. ✅ **Data Layer** - Separate business logic from API routes
2. ✅ **Multiple HTTP Methods** - GET, POST, DELETE in same route
3. ✅ **Dynamic Routes** - `[id]` parameter
4. ✅ **Request Validation** - Check required fields
5. ✅ **Error Handling** - Try/catch with proper status codes
6. ✅ **TypeScript Types** - Strong typing throughout
7. ✅ **JSON Responses** - Consistent response format
8. ✅ **Query Parameters** - Extract from URL
9. ✅ **Request Body** - Parse JSON from POST
10. ✅ **Status Codes** - 200, 201, 400, 404, 500

---

## 🚀 Next Steps:

To make this production-ready:

1. **Replace in-memory storage with Supabase**:
```typescript
import { getSupabase } from '@/lib/supabase';

export async function createAlert(...) {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('alerts')
    .insert([{ userId, productId, targetPrice, currentPrice }])
    .select();
  
  return data[0];
}
```

2. **Add authentication** with NextAuth
3. **Add rate limiting** to prevent abuse
4. **Add WebSocket** for real-time notifications
5. **Add email notifications** when alerts trigger

---

**That's a complete, working API from scratch!** 🎉
