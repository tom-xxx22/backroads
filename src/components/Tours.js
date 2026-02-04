import Title from './Title'
import { tours } from '../data'

export default function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((item, idx) => {
          return (
            <article className="tour-card" key={item.id}>
              <div className="tour-img-container">
                <img src={item.img} className="tour-img" alt="" />
                <p className="tour-date">{item.time}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{item.title}</h4>
                </div>
                <p>{item.content}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {item.location}
                  </p>
                  <p>{item.timeToPlay}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
