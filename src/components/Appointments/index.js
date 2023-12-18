import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {title, date, appointmentsList} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="white-bg">
            <h1 className="heading">Add Appointment</h1>
            <div className="input-container">
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="title" className="para">
                  TITLE
                </label>
                <br />
                <input
                  type="input"
                  placeholder="Title"
                  className="input-title-name"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <br />
                <label htmlFor="title" className="para">
                  DATE
                </label>
                <br />
                <input
                  type="datetime-local"
                  className="input-title-name"
                  placeholder="Date"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <br />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="hr" />
          <div className="comments-container">
            <h1 className="comment-para">Appoinments</h1>
            <button className="Sttared-btn" type="button">
              Starred
            </button>
          </div>
          <ul className="list-container">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                appointmentItem={eachAppointment}
                key={eachAppointment.id}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
