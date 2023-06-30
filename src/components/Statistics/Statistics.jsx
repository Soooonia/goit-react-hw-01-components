import css from './Statistics.module.css'
import PropTypes from 'prop-types';

function Statistics({ title = 'Upload stats', stats }){
    return (
<section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.statlist}>
  
  {stats.map(({ label, percentage, id })=> {
          return (
            <StatisticItem
              key={id}
              label={label}
              percentage={percentage}
            />
          );    
            
        })}
      </ul>
    </section>
  );
};
  
function StatisticItem({ label, percentage}) {
    return (
      <li
        className={css.item}
      >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};




    export default Statistics;

