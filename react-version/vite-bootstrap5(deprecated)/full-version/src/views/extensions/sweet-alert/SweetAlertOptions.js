// ** Reactstrap Imports
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'

// ** Third Party Components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// ** Images
import alertImg from '@src/assets/images/slider/04.jpg'

const MySwal = withReactContent(Swal)

const SweetAlertOptions = () => {
  const handleImageAlert = () => {
    return MySwal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: alertImg,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
      customClass: { confirmButton: 'btn btn-primary' },
      buttonsStyling: false
    })
  }

  const handleTimeoutAlert = () => {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> seconds.',
      timerProgressBar: true,
      timer: 2000,
      didOpen() {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose() {
        clearInterval(timerInterval)
      }
    }).then(function (result) {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  const handleClickOutside = () => {
    return MySwal.fire({
      backdrop: true,
      title: 'Click outside to close!',
      text: 'This is a cool message!',
      allowOutsideClick: true,
      customClass: { confirmButton: 'btn btn-primary' },
      buttonsStyling: false
    })
  }

  const handleAjax = () => {
    MySwal.fire({
      title: 'Search for a user',
      input: 'text',
      customClass: {
        input: 'mx-3',
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ms-1'
      },
      buttonsStyling: false,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm(login) {
        return fetch(`//api.github.com/users/${login}`)
          .then(function (response) {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(function (error) {
            MySwal.showValidationMessage(`Request failed:  ${error}`)
          })
      }
    }).then(function (result) {
      if (result.value) {
        MySwal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
          customClass: {
            confirmButton: 'btn btn-primary'
          }
        })
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Options</CardTitle>
      </CardHeader>
      <CardBody>
        <div className='demo-inline-spacing'>
          <Button color='primary' onClick={handleImageAlert} outline>
            Image
          </Button>
          <Button color='primary' onClick={handleTimeoutAlert} outline>
            Timeout
          </Button>
          <Button color='primary' onClick={handleClickOutside} outline>
            Click Outside
          </Button>
          <Button color='primary' onClick={handleAjax} outline>
            Ajax
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default SweetAlertOptions
