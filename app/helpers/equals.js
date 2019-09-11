import { helper } from '@ember/component/helper';

export default helper(function equals(params/*, hash*/) {
  return params[0] === params[1];
});
