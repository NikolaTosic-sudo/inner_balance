import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const MoreButton = ({ link, classes }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Link href={link} className={classes}>
        {t('moreButton')}
      </Link>
    </>
  );
};

export default MoreButton;
