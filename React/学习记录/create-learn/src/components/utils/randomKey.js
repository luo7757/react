export function createKey (keyLength = 6){
  return Math.random().toString(36).slice(2, 2 + keyLength);
}

export default {
  INIT: (len) => `@@redux/INIT${createKey(len)}`,
  UNKNOWN: (len) =>  `@@redux/PROBE_UNKNOWN_ACTION${createKey(len).split("").join(".")}`,
} 