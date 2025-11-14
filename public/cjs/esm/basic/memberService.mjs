// memberCreate.mjs
import { sendMail } from './memberDataService.mjs';

export function createMember(name, email, address) {
  const member = { name, email, address };
  sendMail(member);
  return member;
}
