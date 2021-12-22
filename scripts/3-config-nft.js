import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x68dF4f277810A296D89e2e72FE9cc2b161C95E7D",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Aid Package",
        description: "This NFT will give you access to ReliefDAO!",
        image: readFileSync("scripts/assets/aid_package.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()