from node as builder

workdir /usr/src/app
copy package*.json ./
run npm ci
copy . .
run npm run build

from scratch
copy --from=builder /usr/src/app/dist/ .
