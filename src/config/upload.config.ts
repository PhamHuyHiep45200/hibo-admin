import { ref as storageRef } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import { v4 as uuidv4 } from "uuid";

const storage = useFirebaseStorage();
const mountainFileRef = storageRef(storage, `images/${uuidv4()}`);

export default mountainFileRef;
