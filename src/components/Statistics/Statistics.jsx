import css from './Statistics.module.css'

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

    export default Statistics;

