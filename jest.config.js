function timeWord(time) {
    const hours = parseInt(time.split(':')[0]);
    const minutes = parseInt(time.split(':')[1]);
  
    const hourWords = [
      'midnight',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'noon',
    ];
  
    const minuteWords = [
      'oh',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'twenty one',
      'twenty two',
      'twenty three',
      'twenty four',
      'twenty five',
      'twenty six',
      'twenty seven',
      'twenty eight',
      'twenty nine',
    ];
  
    const period = hours < 12 ? 'am' : 'pm';
    const hour = hourWords[hours % 12];
    const minute = minuteWords[minutes];
  
    if (minutes === 0) {
      if (hours === 0 || hours === 12) {
        return hour;
      } else {
        return `${hour} o'clock ${period}`;
      }
    } else if (minutes <= 9) {
      return `${hour} oh ${minute} ${period}`;
    } else if (minutes <= 19) {
      return `${hour} ${minute} ${period}`;
    } else {
      const tens = minuteWords[Math.floor(minutes / 10) + 18];
      const ones = minuteWords[minutes % 10];
      return `${hour} ${tens} ${ones} ${period}`;
    }
  }
  
  module.exports = timeWord;
  