import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useConfig } from '../contexts/ConfigContext';

export default function DesktopMenuItems() {
  const { t } = useTranslation();
  const location = useLocation();
  const { pages } = useConfig();

  return (
    <nav className="mt-5 px-2">
      <Link
        to={pages.dashboard}
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          location.pathname === pages.dashboard
            ? 'bg-indigo-100 text-indigo-600'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <svg
          className={`[.w-20_&]:mx-auto [.w-64_&]:mr-4 h-6 w-6 ${
            location.pathname === pages.dashboard
              ? 'text-indigo-600'
              : 'text-gray-400 group-hover:text-gray-500'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="[.w-20_&]:hidden">{t('dashboard')}</span>
      </Link>
    </nav>
  );
}
