// eventUnitName: result.eventUnitName,
// id: result.id,
// disciplineCode: result.disciplineCode,
// genderCode: result.genderCode,
// eventCode: result.eventCode,
// phaseCode: result.phaseCode,
// eventId: result.eventId,
// eventName: result.eventName,
// phaseId: result.phaseId,
// phaseName: result.phaseName,
// disciplineId: result.disciplineId,
// eventOrder: result.eventOrder,
// phaseType: result.phaseType,
// eventUnitType: result.eventUnitType,
// olympicDay: result.olympicDay,
// endDate: result.endDate,
// hideStartDate: result.hideStartDate,
// hideEndDate: result.hideEndDate,
// startText: result.startText,
// order: result.order,
// venue: result.venue,
// venueDescription: result.venueDescription,
// location: result.location,
// locationDescription: result.locationDescription,
// status: result.status,
// statusDescription: result.statusDescription,
// medalFlag: result.medalFlag,
// liveFlag: result.liveFlag,
// scheduleItemType: result.scheduleItemType,
// unitNum: result.unitNum,
// sessionCode: result.sessionCode,
// competitors: result.competitors.map(competitor => ({
//     code: competitor.code,
//     noc: competitor.noc,
//     name: competitor.name,
//     order: competitor.order,
//     results: {
//         position: competitor.results.position,
//         mark: competitor.results.mark,
//         medalType: competitor.results.medalType,
//         irm: competitor.results.irm
//     }
// })),

export default async function allDetails() { // fonction "officielle" pour récupérer les épruves et leur emplacement
    const apiUrl = 'https://sph-s-api.olympics.com/summer/schedules/api/FRA/schedule/';

    const response = await fetch(apiUrl);
    const data = await response.json();

    const results = await Promise.all(data.units.map(async (element) => {
        return {
            venueDescription: element.venueDescription,
            disciplineName: element.disciplineName,
            startDate: element.startDate,
            endDate: element.endDate,

        };
    }));
 
    return results;

}