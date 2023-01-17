# Black Mirror
Using CRDT by [Orbit DB](https://github.com/orbitdb/orbit-db) to build a serverless database for blogs on top of [IPFS](https://docs.ipfs.tech/). 

## Instructions (local)
- Clone the repo, choose PORT.
- Install dependencies``` npm i ```
- Create a local instance of IPFS and OrbitDB then open it with [.open](https://github.com/orbitdb/orbit-db/blob/main/API.md#orbitdbopenaddress-options).
- Run ``` npm run server```
- Use [Postman](https://www.postman.com/) to add, read, sort database.

>**Note**: Read Orbit DB [field manual](https://github.com/orbitdb/field-manual) to connect to global IPFS network.

## Global
This is what i think
- IPFS instance in browser (React) and send post.
- Connect post/CID with OrbitDB CRDT.
- Use [IPFS cluster](https://ipfscluster.io/) or other pinning service for data persisatane.
- Build an incentive layer for self sustainability.

