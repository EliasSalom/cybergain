import  { FC } from 'react';
import { Typography } from '@mui/material';
import EventCard from '@/components/Cards/EventCard';
import { eventsData } from '@/utils/data/data';
import styles from './events.module.scss'; 
import { PageHero } from '@/components/Hero/PageHero';

export const generateMetadata = () => {
  return {
    title: "Cybersecurity Events - Webinars & Programs",
    description: "Description: Discover our upcoming cybersecurity events, workshops, and conferences. Learn about the latest industry developments, network with other professionals, and gain valuable knowledge from expert speakers. Our events often include hands-on workshops and labs, where you can practice red team, blue team, and purple team techniques. Stay updated on our events calendar and register your participation today. ",
    keywords: "cybersecurity events, webinars, cybersecurity programs, cybersecurity conferences",
  };
};

const EventsPage: FC = () => (
  <div >
    <div className={styles.header}>
      <PageHero title='Events' description='Discover Our Latest And Upcoming Webinars, Diverse Cybersecurity Programs, And Our Active
        Participation In Notable Events. Stay Informed, Learn, And Engage As We Contribute To And
        Collaborate Within The Dynamic Field Of Cybersecurity.'/>
    </div>
    <div className={styles.eventsSection}>
      {/* <h2 className={styles.sectionTitle}>Events</h2> */}
      <p className={styles.sectionDescription}>
        Discover our latest and upcoming webinars, cybersecurity programs, and more.
      </p>
      <div className={styles.eventsList}>
        {eventsData.map((event) => (
          <EventCard
            key={event.id}
          event={event}
          />
        ))}
      </div>
    </div>
  </div>
);

export default EventsPage;
