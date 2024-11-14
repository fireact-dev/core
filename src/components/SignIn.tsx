import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GoogleAuthProvider, signInWithPopup, OAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { saveUserToFirestore } from '../utils/userUtils';
import { useLoading } from '../contexts/LoadingContext';
import { useConfig } from '../contexts/ConfigContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setLoading } = useLoading();
  const { signin } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { socialLogin, auth, db, pages } = useConfig();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      setError('');
      await signin(email, password);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleMicrosoftSignIn() {
    const provider = new OAuthProvider('microsoft.com');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleFacebookSignIn() {
    const provider = new FacebookAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleAppleSignIn() {
    const provider = new OAuthProvider('apple.com');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleGitHubSignIn() {
    const provider = new GithubAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleTwitterSignIn() {
    const provider = new TwitterAuthProvider();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  async function handleYahooSignIn() {
    const provider = new OAuthProvider('yahoo.com');
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await saveUserToFirestore(user, user.displayName || "", db);
      navigate(pages.dashboard);
    } catch (err) {
      setError(t('failedSignIn'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t('signInToAccount')}
        </h2>
      </div>
      {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t('email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {t('password')}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {t('signInWithEmailAndPassword')}
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {t('dontHaveAccount')}{' '}
          <Link to={pages.signUp} className="font-medium text-indigo-600 hover:text-indigo-500">
            {t('signup')}
          </Link>
        </p>
        <Link
          to={pages.resetPassword}
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          {t('forgotPassword')}
        </Link>
      </div>
      <div className="mt-4 space-y-2">
        {socialLogin.google && (
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            {t('signInWithGoogle')}
          </button>
        )}
        {socialLogin.microsoft && (
          <button
            onClick={handleMicrosoftSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('signInWithMicrosoft')}
          </button>
        )}
        {socialLogin.facebook && (
          <button
            onClick={handleFacebookSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            {t('signInWithFacebook')}
          </button>
        )}
        {socialLogin.apple && (
          <button
            onClick={handleAppleSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
          >
            {t('signInWithApple')}
          </button>
        )}
        {socialLogin.github && (
          <button
            onClick={handleGitHubSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            {t('signInWithGitHub')}
          </button>
        )}
        {socialLogin.twitter && (
          <button
            onClick={handleTwitterSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            {t('signInWithTwitter')}
          </button>
        )}
        {socialLogin.yahoo && (
          <button
            onClick={handleYahooSignIn}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {t('signInWithYahoo')}
          </button>
        )}
      </div>
    </div>
  );
}
