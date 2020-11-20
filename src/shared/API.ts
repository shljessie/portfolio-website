import axios from 'axios'

export interface Users {
  email: string | null
  password: string | null
  name: string | null
}

export interface SignInForm {
  email: string,
  password: string
}

export interface UserInfo {
  email: string
  firstname: string
  lastname: string
  job_title: string
  company: string
  balance: string
  mailinglist_subscribed: boolean
  sdk_user: boolean
  sdk_device_count: number
  sdk_max_device_count: number
}

export interface PatchUserInfo {
  password: string
  update_password?: string
  confirm_new_password?: string
  update_firstname?: string
  update_lastname?: string
  update_company?: string
  update_job_title?: string
  update_mailinglist_subscribed?: true | false
}

export interface UpdateUserInfo {
  password: string
  update_password?: string
  confirm_new_password?: string
  firstname?: string
  lastname?: string
  company?: string
  job_title?: string
  mailinglist_subscribed?: true | false
}


export interface SignUpForm {
  email: string
  password: string
  confirm_password?: string
  firstname: string
  lastname: string
  company?: string
  job_title?: string
  subscribe_mailinglist?: boolean
  agree_term_1?: boolean,
  agree_term_2?: boolean
}


export const getRefreshToken = ({ email, password }: SignInForm) => {
  return axios.post('/dashboard/session',
    {
      email: email,
      password: password
    }
  )
}

export const getAccessToken = (refreshToken: any) => {
  return axios.post('/dashboard/token',
    {
      'refresh_token': refreshToken
    }
  )
}

export const postSignUp = (formData: SignUpForm) => {
  return axios.post('/user/signup', {
    ...formData
  })
}

export async function getUserInfo() {
  return axios.get('/dashboard/me', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  })
}

export async function patchUserInfo(updateForm: PatchUserInfo) {
  return axios.patch('/dashboard/me', updateForm, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
  )
}

export async function updateUserInfo(updateForm: UpdateUserInfo) {
  return axios.patch('/dashboard/me', updateForm, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    }
  )
}

export async function postNewPayment(amount: string) {
  return axios.post('/dashboard/pay/new', {
    amount: amount
  }, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  })
}


export async function postEmailConfirm(challenge: string) {
  return axios.post('/user/confirm-email/' + challenge)
}

export async function postForgotPassword(email: string) {
  return axios.post('/user/forgot-password/' + email)
}

export async function postResetPassword(challenge: string, newPassword: string) {
  return axios.post('/user/reset-password/' + challenge, {
    password: newPassword
  })
}

export async function postEmailSubscribeRequest(email: string) {
  return axios.post('/mailing-list/subscribe/' + email)
}

export async function postEmailSubscriptionConfirm(challenge: string) {
  return axios.post('/mailing-list/confirm-email/' + challenge)
}

export async function postEmailUnsubscription(email: string) {
  return axios.post('/mailing-list/unsubscribe/' + email)
}