'use client';
import React, { useEffect, useState } from 'react';
import Form from 'next/form';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import TerminRangePicker from '../TerminRangePicker';
import { addContacts, createBlocks } from './utils';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { ToastText, ToastWrapper } from './style';
import { useTranslation } from 'react-i18next';
import { trackContactEvent } from '@/lib/fbpixel';

const sendMessageToSlack = async (messageBlocks, e, setRanges, t) => {
  const webhookURL =
    'https://hooks.slack.com/services/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';

  try {
    await axios.post(
      webhookURL,
      JSON.stringify(
        { text: `<!channel>`, blocks: messageBlocks },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
    );

    toast.success(
      <ToastText>{t('contact.contactForm.toastSuccess')}</ToastText>
    );
    if (e?.target) {
      e.target.name.value = '';
      e.target.email.value = '';
      e.target.phone.value = '';
      e.target.category.value = '';
      e.target.message.value = '';
    }

    setRanges([]);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Axios Error Details:',
        error.response?.data || error.message
      );
    }

    if (e?.preventDefault) {
      e.preventDefault();
    }

    toast.error(<ToastText>{t('contact.contactForm.toastError')}</ToastText>);
  }
};

const ContactForm = () => {
  const [allRanges, setAllRanges] = useState([]);
  const [appointmentType, setAppointmentType] = useState('');
  const { t } = useTranslation('common');

  const urlParams = useSearchParams();

  useEffect(() => {
    const type = urlParams.get('appointmentType');

    if (type) {
      setAppointmentType(type);
    }
  }, [urlParams]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    const transformedData = allRanges.map((item) => ({
      ...item,
      startDay: format(new Date(item.startDay), 'dd.MM.yyyy'),
      endDay: format(new Date(item.endDay), 'dd.MM.yyyy'),
    }));

    const dataToSend = createBlocks(formObject, transformedData);

    addContacts(e);

    await sendMessageToSlack(dataToSend, e, setAllRanges, t);
  };

  const handleSelect = (value) => {
    setAllRanges(value);
  };

  return (
    <>
      <ToastWrapper>
        <ToastContainer position="top-center" />
      </ToastWrapper>

      <Form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="row gtr-uniform">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="demo-name"
              placeholder={t('contact.contactForm.name')}
              className="input-name"
              required
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="demo-email"
              placeholder="Email"
              className="input-email"
              required
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder={t('contact.contactForm.phoneNumber')}
              className="input-email"
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <select
              name="category"
              id="demo-category"
              className="input-email"
              required
              onChange={(e) => setAppointmentType(e?.target?.value)}
              value={appointmentType}
            >
              <option value="">- {t('contact.contactForm.type')} -</option>
              <option value="barsa">Access Bars</option>
              <option value="belly">Belly Revolution</option>
            </select>
          </div>
          <div className="col-12">
            <TerminRangePicker
              handleSelect={handleSelect}
              allRanges={allRanges}
              setAllRanges={setAllRanges}
              additionalText={false}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              id="demo-message"
              placeholder={t('contact.contactForm.message')}
              rows="6"
              className="input-textarea"
            ></textarea>
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <button
                  type="submit"
                  value="Posalji poruku"
                  className="button primary"
                  style={{ fontSize: 14 }}
                  onClick={trackContactEvent}
                >
                  {t('contact.contactForm.button')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
