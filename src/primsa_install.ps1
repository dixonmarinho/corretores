Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force prisma\generated
Remove-Item -Recurse -Force node_modules\.prisma

npm install
npx prisma generate
npm run build
