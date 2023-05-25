// ** Custom Components & Plugins
import classnames from 'classnames'
import { Star, Paperclip } from 'react-feather'

// ** Custom Component Import
import Avatar from '@components/avatar'

// ** Utils
import { htmlToString } from '@utils'

// ** Reactstrap Imports
import { Input, Label } from 'reactstrap'

const MailCard = props => {
  // ** Props
  const {
    mail,
    dispatch,
    selectMail,
    labelColors,
    updateMails,
    selectedMails,
    handleMailClick,
    handleMailReadUpdate,
    formatDateToMonthShort
  } = props

  // ** Function to render labels
  const renderLabels = arr => {
    if (arr && arr.length) {
      return arr.map(label => (
        <span key={label} className={`bullet bullet-${labelColors[label]} bullet-sm mx-50`}></span>
      ))
    }
  }

  // ** Function to handle read & mail click
  const onMailClick = () => {
    handleMailClick(mail.id)
    handleMailReadUpdate([mail.id], true)
  }

  return (
    <li onClick={() => onMailClick(mail.id)} className={classnames('d-flex user-mail', { 'mail-read': mail.isRead })}>
      <div className='mail-left pe-50'>
        <Avatar img={mail.from.avatar} />
        <div className='user-action'>
          {/* <Input
            label=''
            type='checkbox'
            checked={selectedMails.includes(mail.id)}
            id={`${mail.from.name}-${mail.id}`}
            onChange={e => e.stopPropagation()}
            onClick={e => {
              dispatch(selectMail(mail.id))
              e.stopPropagation()
            }}
          /> */}
          <div className='form-check'>
            <Input
              type='checkbox'
              id={`${mail.from.name}-${mail.id}`}
              onChange={e => e.stopPropagation()}
              checked={selectedMails.includes(mail.id)}
              onClick={e => {
                dispatch(selectMail(mail.id))
                e.stopPropagation()
              }}
            />
            <Label onClick={e => e.stopPropagation()} for={`${mail.from.name}-${mail.id}`}></Label>
          </div>
          <div
            className='email-favorite'
            onClick={e => {
              e.stopPropagation()
              dispatch(updateMails({ emailIds: [mail.id], dataToUpdate: { isStarred: !mail.isStarred } }))
            }}
          >
            <Star
              size={14}
              className={classnames({
                favorite: mail.isStarred
              })}
            />
          </div>
        </div>
      </div>
      <div className='mail-body'>
        <div className='mail-details'>
          <div className='mail-items'>
            <h5 className='mb-25'>{mail.from.name}</h5>
            <span className='text-truncate'>{mail.subject}</span>
          </div>
          <div className='mail-meta-item'>
            {mail.attachments && mail.attachments.length ? <Paperclip size={14} /> : null}
            {renderLabels(mail.labels)}
            <span className='mail-date'>{formatDateToMonthShort(mail.time)}</span>
          </div>
        </div>
        <div className='mail-message'>
          <p className='text-truncate mb-0'>{htmlToString(mail.message)}</p>
        </div>
      </div>
    </li>
  )
}

export default MailCard
