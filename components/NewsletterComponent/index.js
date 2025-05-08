'use client';
import axios from 'axios';
import Form from 'next/form';
import { ToastText, ToastWrapper } from '../ContactForm/style';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation('common');

  const addContact = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://api.brevo.com/v3/contacts',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_BREVO,
      },
      data: {
        email: e.target.email.value,
        listIds: [5],
      },
    };

    axios
      .request(options)
      .then(() =>
        toast.success(<ToastText>{t('newsletter.toastSuccess')}</ToastText>)
      )
      .catch((err) => {
        if (err?.response?.data?.code === 'duplicate_parameter') {
          toast.error(<ToastText>{t('newsletter.toastErrorDupe')}</ToastText>);
        } else {
          toast.error(<ToastText>{t('newsletter.toastError')}</ToastText>);
        }
      });
  };

  return (
    <>
      <ToastWrapper>
        <ToastContainer position="top-center" />
      </ToastWrapper>
      <section className="main">
        <header className="major">
          <h2>{t('newsletter.title')}</h2>
          <p>{t('newsletter.subTitle')}</p>
        </header>
        <Form onSubmit={(e) => addContact(e)} className="combined">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t('newsletter.email')}
            className="invert"
          />
          <input
            type="submit"
            className="primary"
            value={t('newsletter.button')}
          />
        </Form>
      </section>
    </>
  );
};

export default Newsletter;
