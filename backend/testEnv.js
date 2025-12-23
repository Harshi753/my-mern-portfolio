require('dotenv').config();

console.log('=== Testing .env file ===');
console.log('PORT:', process.env.PORT);
console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('');

if (!process.env.MONGO_URL) {
  console.log('❌ ERROR: MONGO_URL is undefined!');
  console.log('Make sure .env file exists in backend folder');
} else {
  console.log('✅ SUCCESS: .env file is loading correctly!');
}