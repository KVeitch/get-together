export const cleanPhotoData = (photos) => photos.map((photo) => photo.urls.small);

export const formatDate = (date) => {
  const fullDate = new Date(date);
  const cleanedDate = String(fullDate.getMonth() + 1).padStart(2, '0') + '/' + fullDate.getDate() + '/' + fullDate.getFullYear();
  return cleanedDate;
};

export const formatTime = (time) => {
  const fullDate = new Date(time);
  const meridian = fullDate.getHours() > 12 ? 'PM' : 'AM';
  const hour = fullDate.getHours() > 12 ? fullDate.getHours() - 12 : fullDate.getHours();
  const minutes = fullDate.getMinutes() < 10 ? '0' + fullDate.getMinutes() : fullDate.getMinutes();
  const cleanedTime = `${hour} : ${minutes} ${meridian}`;
  return cleanedTime;
};

export const cleanFlightData = (data) => {
  const routLegs = data.legs;
  const routesLists = Object.keys(data.routings).map((route) => data.routings[route].leg_idens);
  const routes = routesLists.map((list) => list.map((legNumber) => ({
    arrival: formatDate(routLegs[legNumber].arrive_iso),
    arrivalTime: formatTime(routLegs[legNumber].arrive_iso),
    depart: formatDate(routLegs[legNumber].depart_iso),
    departTime: formatTime(routLegs[legNumber].arrive_iso),
    from: routLegs[legNumber].from_code,
    to: routLegs[legNumber].to_code,
    flight_no: routLegs[legNumber].marketing_num.join(' ')
  })));
  const singleData = routes.map((list) => {
    const flights = list.length > 1 ? `${list[0].flight_no} and ${list[list.length - 1].flight_no}` : list[0].flight_no;
    const totalTravel = ({
      arrival: list[list.length - 1].arrival,
      arrivalTime: list[list.length - 1].arrivalTime,
      depart: list[0].depart,
      departTime: list[0].departTime,
      from: list[0].from,
      to: list[list.length - 1].to,
      flights
    });
    return totalTravel;
  });
  return singleData;
};
