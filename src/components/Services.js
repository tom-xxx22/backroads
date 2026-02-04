import Title from './Title'
import { services } from '../data'

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((item, idx) => {
          return (
            <article className="service" key={item.id}>
              <span className="service-icon">
                <i className={item.iconClass}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{item.title}</h4>
                <p className="service-text">{item.content} </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
