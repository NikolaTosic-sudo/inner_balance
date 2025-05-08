'use client';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CalendarWrapper, PickerTitle, PickerSubtitle } from './style';
import dynamic from 'next/dynamic';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';
const Tag = dynamic(() => import('antd/es/tag'), { ssr: false });

dayjs.extend(customParseFormat);

const TerminRangePicker = ({ allRanges, setAllRanges, additionalText }) => {
  const { t } = useTranslation('common');
  const [selectedDate] = useState([]);

  const handleOnChange = (value) => {
    const currentRanges = [...allRanges];
    const filteredValue = value.filter((val) => val);
    if (filteredValue.length === 2) {
      const newValue = {
        id: Math.random() * 10000000,
        startDay: value[0],
        endDay: value[1],
      };
      currentRanges.push(newValue);
      setAllRanges(currentRanges);
    }
  };

  const handleOnClose = (value, event) => {
    event.preventDefault();
    const filteredRanges = allRanges.filter((range) => range.id !== value.id);
    setAllRanges(filteredRanges);
  };

  return (
    <div>
      <PickerTitle>{t('contact.terminPicker.title')}</PickerTitle>
      {additionalText && (
        <PickerSubtitle>
          {t('contact.terminPicker.subtitleFirst')} <br />{' '}
          <i>
            <b>Note:</b> {t('contact.terminPicker.subtitleSecond')}
          </i>
        </PickerSubtitle>
      )}
      <CalendarWrapper show>
        <ReactCalendar
          minDate={new Date()}
          selectRange
          defaultActiveStartDate={new Date()}
          onChange={handleOnChange}
          className="calendar"
          value={selectedDate}
        />
      </CalendarWrapper>
      <div style={{ marginTop: 8, maxWidth: 280 }}>
        {allRanges.length
          ? allRanges.map((range, index) => (
              <Tag
                key={index}
                style={{ marginBottom: 8 }}
                closable
                onClose={(event) => handleOnClose(range, event)}
                color="#7183cd"
              >
                {dayjs(range.startDay).format('DD.MM.YYYY')} -{' '}
                {dayjs(range.endDay).format('DD.MM.YYYY')}
              </Tag>
            ))
          : null}
      </div>
    </div>
  );
};

export default TerminRangePicker;
