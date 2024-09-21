import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Models,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nicklabs.aura",
  projectId: "66ea90670022d819639d",
  databaseId: "66eaa50e00207f2170a3",
  userCollectionId: "66eaa53900204301e00f",
  videoCollectionId: "66eaa563000ca921b9c3",
  storageId: "66eb0b3e00088c2d7c80",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

/**
 * Register User
 * @param email
 * @param password
 * @param username
 */
export const createUser = async (email, password, username) => {
  // account.create(ID.unique(), "me@example.com", "password", "Jane Doe")
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (err) {
    console.log(err);
    throw new Error(err as string);
  }
};

/**
 *
 * @param email
 * @param password
 * @returns
 */
export async function signIn(
  email: string,
  password: string
): Promise<Models.Session> {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error as string);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};
