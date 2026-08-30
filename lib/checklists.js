const checklist = (items) => items.map((label, index) => ({ id: String(index + 1).padStart(2, "0"), label }));

export const cleaningChecklists = {
  "home-apartment-cleaning": checklist(["Confirm access and agreed rooms", "Dust and wipe surfaces", "Clean kitchen and bathroom areas", "Vacuum or mop agreed floors", "Empty and reline bins", "Record follow-up items"]),
  "office-cleaning": checklist(["Confirm access and occupied areas", "Clean workstations and meeting rooms", "Clean kitchenette and shared areas", "Clean restrooms in scope", "Collect waste and restock agreed items", "Record follow-up items"]),
  "airbnb-turnover-cleaning": checklist(["Confirm check-out access and changeover window", "Reset bedrooms and agreed linen", "Clean bathrooms and kitchen", "Restock agreed essentials", "Check for visible issues and report them", "Complete handover checklist"]),
  "deep-cleaning": checklist(["Confirm deep-clean checklist", "Reach behind and under agreed furniture", "Detail tiles, grout, and fittings", "Clean appliance exteriors in scope", "Remove built-up grime in agreed areas", "Record follow-up items"]),
  "move-in-move-out-cleaning": checklist(["Confirm empty-property access", "Clean cabinets and fixtures in scope", "Detail kitchen and bathroom areas", "Clean floors, skirting, and agreed walls", "Check handover priorities", "Record follow-up items"]),
  "post-construction-cleaning": checklist(["Confirm active works are complete", "Remove dust and debris in scope", "Clean fixtures and windows in scope", "Remove agreed residue", "Wash or polish agreed floors", "Record handover items"]),
  "sofa-upholstery-cleaning": checklist(["Confirm material and treatment scope", "Protect surrounding areas", "Treat agreed spots and surfaces", "Clean cushions and crevices in scope", "Check finish and drying guidance", "Record follow-up items"]),
  "water-tank-cleaning": checklist(["Confirm safe access and service window", "Drain and remove sediment in scope", "Scrub internal surfaces", "Apply agreed disinfection", "Confirm refill arrangement", "Record inspection notes"]),
  "event-clean-up": checklist(["Confirm venue access and handover time", "Clear waste in agreed areas", "Clean venue surfaces in scope", "Reset rooms and common areas", "Check venue handover priorities", "Record follow-up items"]),
};

export function getChecklistTemplate(serviceSlug) {
  return cleaningChecklists[serviceSlug] || [];
}
