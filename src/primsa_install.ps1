Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force prisma\generated
Remove-Item -Recurse -Force node_modules\.prisma

npm install @prisma/adapter-pg pg
npm install dotenv

npm install
npx prisma generate
npm run build
