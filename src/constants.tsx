import CheckIcon from '@material-ui/icons/Check';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import React from "react";
import WarningIcon from '@material-ui/icons/Warning';
import theme from "../src/theme"
import {toast} from "react-toastify";

type NotifyType = 'error' | 'success' | 'info' | 'warning'

const NOTIFY_DATA_BY_TYPE: {[key: string]: any} = {
  error: {
    icon: ErrorIcon,
    toast: toast.error
  },
  success: {
    icon: CheckIcon,
    toast: toast.success
  },
  info: {
    icon: InfoIcon,
    toast: toast.info
  },
  warning: {
    icon: WarningIcon,
    toast: toast.warning
  },
}

export const NOTIFY_TYPE = {
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning'
}



export function notify (msg: string, type: string) {
  const notifyData = NOTIFY_DATA_BY_TYPE[type]
  notifyData.toast(
    <div style={{display: 'flex', alignItems: 'center', fontSize: '14px', padding: '0 8px 5px 8px'}}>
      <notifyData.icon style={{height: '22px', width: '22px', marginRight: theme.spacing(2)}}/>
      {msg}
    </div>,
    {
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
}