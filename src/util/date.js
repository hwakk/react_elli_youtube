import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko.js";

register("ko", koLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
