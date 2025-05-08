import axios from 'axios';

export const createBlocks = (formData, ranges) => {
  const dataToSend = [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Novi zahtjev:\n*${formData?.name}*`,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Email:*\n${formData?.email}`,
        },
        {
          type: 'mrkdwn',
          text: `*Broj:*\n${formData?.phone}`,
        },
        {
          type: 'mrkdwn',
          text: `*Vrsta masaze:*\n${formData?.category}`,
        },
      ],
    },
    {
      type: 'rich_text',
      elements: [
        {
          type: 'rich_text_section',
          elements: [
            {
              type: 'text',
              text: '*Datumi:*\n',
            },
          ],
        },
        {
          type: 'rich_text_list',
          style: 'bullet',
          indent: 0,
          elements: ranges.length
            ? ranges.map((range) => {
                return {
                  type: 'rich_text_section',
                  elements: [
                    {
                      type: 'text',
                      text: `${range.startDay} - ${range.endDay}`,
                    },
                  ],
                };
              })
            : [],
        },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Dodatni zahtjevi:*\n${formData?.message}`,
      },
    },
  ];

  return dataToSend;
};

const formatPhone = (number) => {
  if (typeof number !== 'string') {
    return 68000000;
  }

  if (number.startsWith('+382')) {
    number = number.slice(4);
  }

  return number.trim() === '' ? 68000000 : number;
};

export const addContacts = (e) => {
  if (e?.target) {
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    const listId = formObject.category === 'barsa' ? 6 : 7;

    const options = {
      method: 'POST',
      url: 'https://api.brevo.com/v3/contacts',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_BREVO,
      },
      data: {
        email: formObject.email,
        attributes: {
          FIRSTNAME: formObject.name,
          LANDLINE_NUMBER: `+382${formatPhone(formObject.phone)}`,
        },
        listIds: [listId],
      },
    };

    axios
      .request(options)
      .then()
      .catch((err) => {
        if (err?.response?.data?.code === 'duplicate_parameter') {
          const options = {
            method: 'PUT',
            url: `https://api.brevo.com/v3/contacts/${formObject.email}`,
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              'api-key': process.env.NEXT_PUBLIC_BREVO,
            },
            data: {
              attributes: {
                EMAIL: formObject.email,
                FIRSTNAME: formObject.name,
                LANDLINE_NUMBER: `+382${formatPhone(formObject.phone)}`,
              },
              listIds: [listId],
            },
          };

          axios
            .request(options)
            .then()
            .catch((err) => console.error(err));
        }
      });
  }
};
