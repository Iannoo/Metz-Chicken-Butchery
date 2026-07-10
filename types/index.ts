export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'completed'
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export interface OrderItem {
  id?: string
  product_id: string
  name: string
  quantity: number
  price: number
  created_at?: string
}

export interface Order {
  id?: string
  user_id: string
  items: OrderItem[]
  total_amount: number
  shipping_address: string
  status: OrderStatus
  payment_status: PaymentStatus
  created_at?: string
  updated_at?: string
}

export interface CreateOrderInput {
  items: OrderItem[]
  total_amount: number
  shipping_address: string
  status: OrderStatus
  payment_status: PaymentStatus
}

export interface UpdateOrderStatusInput {
  status: OrderStatus
  message?: string
}

export interface OrderTracking {
  id: string
  order_id: string
  status: OrderStatus
  message: string
  created_at: string
}

export interface DeliverySlot {
  id: string
  date: string
  time_slot: string
  available_capacity: number
  total_capacity: number
  created_at: string
  updated_at: string
}

export interface UserData {
  name: string
  email: string
  phone?: string
  address?: string
}

export interface ErrorWithStatus {
  statusCode?: number
  message?: string
}

export interface OrderRequest {
  items: OrderItem[]
  delivery_method: string
  delivery_date: string
  delivery_time_slot: string
  delivery_address?: string
  special_instructions?: string
  payment_method_id: string
}