import {request} from './request'

export function getMultiHomeData(){
  return request({
    url: '/home/multidata',
    // params: {
    //   limit: '1',
    //   id: '186016'
    // }
  });
}
