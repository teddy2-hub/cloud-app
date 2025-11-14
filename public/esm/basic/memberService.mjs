// memberService.mjs
export function createMember(name){
    const member = { id: Date.now(), name } //컴퓨터의 실제 시간 
    return member
}