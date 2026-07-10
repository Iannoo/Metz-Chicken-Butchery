import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const envTemplate = `# Supabase Configuration
# Get these from your Supabase project dashboard
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_KEY=your_supabase_service_key_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Stripe Configuration (optional for now)
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# Redis Configuration (optional for now)
REDIS_URL=redis://localhost:6379

# Email Configuration (optional for now)
RESEND_API_KEY=your_resend_api_key_here

# Application Configuration
BASE_URL=http://localhost:3000
NODE_ENV=development

# Security (generate random strings)
JWT_SECRET=your_jwt_secret_here
COOKIE_SECRET=your_cookie_secret_here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=60

# Image Optimization
IMAGE_OPTIMIZATION_QUALITY=80
IMAGE_OPTIMIZATION_WIDTH=1200
IMAGE_OPTIMIZATION_HEIGHT=1200

# Cache Configuration
CACHE_TTL=3600
CACHE_PREFIX=metz_chicken_

# Logging
LOG_LEVEL=info
LOG_FORMAT=json
`

const envPath = path.join(__dirname, '.env')

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envTemplate)
  console.log('✅ Created .env file with template values')
  console.log('📝 Please update the .env file with your actual values:')
  console.log('   1. Go to https://supabase.com and create a new project')
  console.log('   2. Get your project URL and API keys from the dashboard')
  console.log('   3. Update SUPABASE_URL, SUPABASE_SERVICE_KEY, and SUPABASE_ANON_KEY in .env')
  console.log('   4. For now, you can leave other values as placeholders')
} else {
  console.log('⚠️  .env file already exists')
}

console.log('\n🚀 To get started:')
console.log('   1. Update your .env file with Supabase credentials')
console.log('   2. Run: npm run dev')
console.log('   3. Visit: http://localhost:3000') 