/* @flow */

// ============================================================================
// Domain model
// ============================================================================

// contact method for a staff member
export type StaffContact = {
    mode: string,
    number: string,
    preferred: boolean,
}

// The role and person with contact information
export type StaffRole = {
    id: string,
    role: ?string,
    name: ?string,
    contacts: Array<StaffContact>,
}

// Start and end time for shift, times are in format <hh>:<mm> e.g. 08:30, 23:00
// Assumes all start times are on the same day, if end < start then end is next day
export type Shift = {
    name: string,
    startTime: string,
    endTime: string,
    shiftOrder: number,     // sort order of shift
}

// Defines a category by its department, shifts and common role names
export type StaffCategoryDef = {
    id: string,                 // should be concat of department & role-type
    department: string,
    roleType: string,           // e.g. doctor, nurse, allied
    shifts: Array<Shift>,       // all shifts must start on the same day
    roleNames: Array<string>    // for lookups - config
}

// An instance of a configuration includes the day and shift
// format is <year><month><day><shift> e.g. 2016032301
export type StaffCategoryInstance = {
    id: string,
    categoryDefId: string,
    department: string,
    date: string,                // YYYY-MM-DD format
    shift: Shift,
    startDT: ?Date,             // Datetime objects when instance is loaded
    endDT: ?Date,
    instanceOrder: number,      // for sorting instances e.g. 2016072901
    assignedStaff: Array<StaffRole>
}

export type StaffMap = {
    categoryDefId: string,
    department: string,
    [key: string]: StaffRole,
}

export type CategoryConfig = {
    categoryDefId: string,
    width: number,
    height: number,
    x: number,
    y: number,
    rowFormat: number,          // row options for ordering of row items
}

export type ScreenConfig = {
    id: string,
    department: string,
    name: string,
    categories: Array<CategoryConfig>,
}

// ============================================================================
// Store
// ============================================================================

export type StaffCategoryDefinitionState = {
    isFetching: boolean,
    error: ?string,
    items: Array<StaffCategoryDef>,
    indexByID: ?{[id:string]: number}
};

export type StaffCategoryInstancesState = {
    isFetching: boolean,
    error: ?string,
    items: Array<StaffCategoryInstance>,
    indexByID: ?{[id:string]: number}
};

export type StaffBoardState = {
    staffCategoryDefs: StaffCategoryDefinitionState,
    staffCategoryInstances: StaffCategoryInstancesState,
}
