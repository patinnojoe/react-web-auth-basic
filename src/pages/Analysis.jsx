import { useEffect } from 'react';
import { Section } from '../components/wrappers/Analysis';
import { getGeneralAnalytics, getUserAnalysis } from '../utils/tasks';

function Analysis() {
  let user = localStorage.getItem('pas-user');
  let userDetails = JSON.parse(user);
  useEffect(() => {
    const fetchGeneralAnalytics = async () => {
      try {
        const res = await getGeneralAnalytics(userDetails);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGeneralAnalytics();
  }, []);

  useEffect(() => {
    const fetUserAnalysis = async () => {
      try {
        const res = await getUserAnalysis(userDetails);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetUserAnalysis();
  }, []);

  document.title = 'Pasevera | Analysis';
  return (
    <Section>
      <div className="container yourAnalysis">
        <h3>Your Analysis</h3>

        <section className="user_analysis">
          <AwardCard
            status="Newbie👶"
            statusHead="Current Status"
            description="You signed up and completed your first task on Pasevera!"
          />
          <AwardCard
            status="7days"
            statusHead="Current Streak"
            description="You're  on a roll!, you completed at least 1 task in the last 7days on Pasevera!"
          />
          <AwardCard
            status="7day streak"
            statusHead="Longest Streak"
            description="you can be focus on achieving your goals for as long as 7days!"
          />
          <AwardCard
            status="1 Completed"
            statusHead="Tasks Completed"
            description="C'mon champ! youve completed just 1 task on Pasevera"
          />

          <AwardCard
            status="Friday"
            statusHead="Most Productive Day"
            description="You're a Friday person! you completed the most Task on Friday"
          />

          <AwardCard
            status="top 50%"
            statusHead="Status ranking"
            description="C'mon champ, you are among the top 50% achivers on Pasevera!"
          />
        </section>
      </div>
      <div className="container generalAnalysis">
        <h3>Leaders Dashboard</h3>
        <div className="general_analysis">
          <div className="leaders_card">
            <span className="position">#1</span>
            <div className="details">
              <span className="leader_name">user@user🏆</span>
              <div className="leader_details">
                <span>
                  <span className="head">Active Streak:</span> 60Days Streak
                </span>

                <span>
                  <span className="head">Current Level:</span> Adept
                </span>
                <span>
                  <span className="head">Tasks Completed:</span> 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Analysis;

export const AwardCard = ({ status, statusHead, description }) => {
  return (
    <div className="award_card">
      <header>
        <span>{statusHead}:</span> <span className="status">{status}</span>
      </header>
      <small>{description}</small>
    </div>
  );
};
