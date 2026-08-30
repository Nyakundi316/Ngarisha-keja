export function reviewRequestMessage({ customerName = "there", reviewUrl = "" } = {}) {
  return `Hi ${customerName}, thank you for choosing Ngarishakeja. If you are comfortable sharing honest feedback, you can leave a review here: ${reviewUrl}`;
}

export function repeatBookingMessage({ customerName = "there", service = "the service" } = {}) {
  return `Hi ${customerName}, we hope ${service.toLowerCase()} went well. If you would like to arrange another visit, reply here and we can discuss a suitable schedule.`;
}
