import { useAuthContext } from "./contexts/AuthContext";

export default function App() {
  const { googleSignIn, currentUser, logOut } = useAuthContext();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex flex-col gap-3 items-center justify-center h-screen">
      {currentUser ? (
        <>
          <img alt="avatar" src={currentUser.photoURL} />
          <p>Nazwa: {currentUser.displayName}</p>
          <button
            onClick={handleSignOut}
            className="bg-red-500 active:scale-95 text-white hover:bg-red-400 p-3 px-5 rounded-lg"
          >
            Wyloguj się
          </button>
        </>
      ) : (
        <button
          className="bg-indigo-500 active:scale-95 text-white hover:bg-indigo-400 p-3 px-5 rounded-lg"
          onClick={handleGoogleSignIn}
        >
          Zaloguj się za pomocą google
        </button>
      )}
    </main>
  );
}
