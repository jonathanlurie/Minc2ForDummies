// In the HDF5 logic, a GROUP is like a directory.
// In the HDF5 logic, an ATTRIBUTE is a couple key/value.
// A GROUP csn contain other GROUPS but can also c
// Every element that is not described as a GROUP is an ATTRIBUTE. 
// HDF5 GROUPS thac contain attributes in Minc2 are so that they always contain
// a "data" attribute. Most of the time, the value associated with "data" will be 0
//
// Some attributes are repeated for every GROUP:
//
// "varid": A string that identifies the variable’s relationship to the MINC specification.
// All MINC standard variables should set this attribute to “MINC standard variable”.
// Non-standard variables may either ignore this attribute or set it to some other string value.
//
// "vartype": A string identifying the class of the variable. It must be one of "groups________",
// "dimension____", "dim-width____" or "var-attribute"
//
// "version": A string identifying the version of this variable. This string is always set to
// “MINC Version 1.0” for MINC standard variables


{
  // GROUP
  // the goup "minc-2.0" is the only one created by Minc under the root "/" folder.
  // This group contains exactely 3 attributee and 3 subgroups.
  // Note: the group "minc-2.0" is the only one from Minc2 description that
  // contains attributes and subgroups.
  // All the other groups contain or only group or only attributes.
  "minc-2.0": {
    // ATTRIBUTE
    // Usually appended so that it keeps an overview of modification history.
    // Though, some processed files have a blank "history" field
    "history": "Fri Nov 18 10:49:28 2011>>> dcm2mnc -dname  -stdin -clobber /tmp/2354.1.all.q/TarLoad-10-49-9q7A7H",
    
    // ATTRIBUTE
    // A string to uniquely identify this file.
    // Concatenation of:
    // hostname, username, date and time, process id, and a global counter
    "ident": "ibis:pinch:2011.11.18.10.49.37:9658:1",
    
    // ATTRIBUTE
    // The version of the MINC library used to create this file.
    // Sometimes missing, possibly due to anonymization
    "minc_version": "2.3.00",
    
    // GROUP
    // Even though Minc2 can be multi dimensional, it mostly allow 4 dimension names:
    // "xspace", "yspace", "zspace", "time" and "vector_dimension".
    // With each dimension comes a GROUP, defining all the associated attributes.
    // For irregularly sampled dimension, the dimension GROUP will contain a data vector
    // with the values of the points at which this dimension was sampled.
    // Note that irregularly-sampled dimensions also use dimension width variables
    // that specify the width of each sample.
    //
    // While there is no particular order for "xspace", "yspace" and "zspace", it's worth to mention
    // that if the Minc2 file contains a "time" dimension, it should be the first,
    // and therefore slowest-varying.
    "dimensions": {
      // GROUP
      "xspace": {
        // This may contain data, if ths dimension was smpled irregularly 
        "data": 0,
        "alignment": "center",
        "comments": "X increases from patient left to right",
        "direction_cosines": [1, 0, 0],
        "length": 361,
        "spacetype": "talairach_",
        "spacing": "regular__",
        "start": -90,
        "step": 0.5,
        "units": "mm",
        "varid": "MINC standard variable",
        "vartype": "dimension____",
        "version": "MINC Version    1.0"
      },
      
      // GROUP
      "yspace": {
        "data": 0,
        "alignment": "center",
        "comments": "Y increases from patient posterior to anterior",
        "direction_cosines": [0, 1, 0],
        "length": 433,
        "spacetype": "talairach_",
        "spacing": "regular__",
        "start": -126,
        "step": 0.5,
        "units": "mm",
        "varid": "MINC standard variable",
        "vartype": "dimension____",
        "version": "MINC Version    1.0"
      },
      
      // GROUP
      "zspace": {
        "data": 0,
        "alignment": "center",
        "comments": "Z increases from patient inferior to superior",
        "direction_cosines": [0, 0, 1],
        "length": 361,
        "spacetype": "talairach_",
        "spacing": "regular__",
        "start": -72,
        "step": 0.5,
        "units": "mm",
        "varid": "MINC standard variable",
        "vartype": "dimension____",
        "version": "MINC Version    1.0"
      }
    },
    
    // GROUP
    "image": {
      
      // GROUP
      // The group "0" contains the highest resolution image. 
      "0": {
        "image-min": {
          "data": [0, 0, 0, "... 361 values ...", 0 ,0 , 0],
          "dimorder": "zspace",
          "varid": "MINC standard variable",
          "vartype": "var_attribute",
          "version": "MINC Version    1.0"
        },
        
        // GROUP
        "image-max": {
          "data": [875.999, 875.999, 875.999, "... 361 values ...", 875.999 ,875.999 , 875.999],
          "dimorder": "zspace",
          "varid": "MINC standard variable",
          "vartype": "var_attribute",
          "version": "MINC Version    1.0"
        },
        
        // GROUP
        "image": {
          "data": [0, 2, 3, 4, "all voxel data in a single dim array", 5, 6, 7],
          
          // A boolean attribute (with values true or false) that indicates whether the variable
          // has been written in its entirety. This can be used to detect program failure when writing out images as
          // they are processed : complete is set to false at the beginning and set to true when all data has been
          // processed and written to the file.
          "complete": "true_",
          
          //the names and order of the dimension variables associated with the dimensions of an HDF5 dataset.
          // The elements are separated with a comma
          "dimorder": "zspace,yspace,xspace",
          
          // A vector of two numbers that specifies both the minimum and maximum valid values
          // for this variable. Values outside this range must be treated as missing or uninitialized. In MINC, the
          // order of the two values in the vector is not significant. This attribute should be considered mandatory
          // for the MINC image variable, unless the variable uses the default range, which is defined to be the full
          // range of an (possibly signed or unsigned) integer type or the interval (0.0, 1.0) for floating point types.
          // It is not required for any other MINC variable.
          "valid_range": [0, 4095],
          "varid": "MINC standard variable",
          "vartype": "group________",
          "version": "MINC Version    1.0"
        }
        
      }
    },
    
    // GROUP
    // This group contains all the ancillary data related to the scan, modality,
    // experimental paradigm, and subject identification information.
    // Typically, large datasets are not stored in this part of the hierarchy.
    // The attributes present in info should not change the way the data are interpreted
    "info": {
      // GROUP
      // All the following attributes are optional, thush some of the following
      // attributes may be absent if they are not relevant for the study.
      // For example, Minc2 files from MRI study will certainly not have the fied "contrast_agent".
      "acquisition": {
        "data": 0,
        // A string identifying this acquisition in the overall set of acquisitions.
        "acquisition_id": 2,
        // A string giving the time of this particular acquisition, in the same format as study:start_time
        "acquisition_time": "150829.627500 ",
        // String identifying the contrast or bolus agent
        "contrast agent": "",
        // A string giving units of dose
        "dose units": "",
        "delay_in_TR": 0,
        "echo_number": 1,
        // the time in seconds between the middle of a 90 degree pulse and the middle of spin echo production
        "echo_time": 0.00316,
        // number of echoes
        "echo_train_length": 1,
        // Floating-point number specifying the number of degrees of rotation
        // between the net magnetization vector and the main magnetic field
        "flip_angle": 8,
        // the time of this particular image
        "image_time": "151453.281000 ",
        // type of this image. See DICOM (0008,0008)
        "image_type": "ORIGINAL\PRIMARY\M\ND\NORM",
        // A string specifying the nucleus that is resonant at the imaging frequency
        "imaged_nucleus": "1H",
        // the precession frequency in Hz of the imaged_nucleus
        "imaging_frequency": 1.23261e+08,
        // A number giving the time duration of the injection (in seconds)
        "injection_length": 0,
        // A string giving time (and date) of injection, in the same format as study:start_time
        "injection_time": "",
        // Total dose of radionuclide or contrast agent injected (in units specified by dose_units)
        "injection_dose": "",
        // A string identifying administration route of injection
        "injection_route": "",
        // A number giving the volume of injection in milliliters.
        "injection_volume": 0,
        // A number giving the time in seconds after the middle of the inverting RF pulse
        // to the middle of the 90 degree pulse to detect the amount of longitudinal magnetization
        "inversion_time": 1.2,
        // A string identifying the spatial data encoding method
        "mr_acq_type": "3D",
        // A number of times a given pulse sequence is repeated before any parameter is changed
        "num_averages": 1,
        "num_dyn_scans": 0,
        // number of phase encoding steps in this MR acquisition. See DICOM (0018,0089)
        "num_phase_enc_steps": 289,
        // number of images in this acquisition. See DICOM (0020,1002).
        "num_slices": 1,
        // A number giving the percentage of the field of view in the phase direction
        // compared with the field of view in the frequency direction. See DICOM (0018,0092)
        "percent_phase_fov": 87.5,
        // A number giving the percentage of acquisition matrix lines sampled.
        // See DICOM (0018,0093)
        "percent_sampling": 100,
        // he direction of phase encoding, either "ROW" or "COL". See DICOM (0018,1312).
        "phase_enc_dir": "ROW ",
        // the inverse of the sampling period, in hertz per pixel. See DICOM (0018,0095).
        "pixel_bandwidth": 220,
        // protocol for image acquisition
        "protocol": "t1_mpr_1mm_p2_pos50 ",
        // the isotope administered
        "radionuclide": "",
        // the half-life of the radionuclide in seconds.
        "radionuclide halflife": 0,
        // the name of the receive coil used in an MR acquisition
        "receive_coil": "HeadMatrixix""",
        // he time in seconds between pulse sequences.
        "repetition_time": 2.4,
        // type of data taken
        "scanning_sequence": "*tfl3d1_ns",
        // text description of the series
        "series_description": "t1_mpr_1mm_p2_pos50 ",
        // the start time of this series, in the same format as study:start_time
        "series_time": "151453.281000 ",
        // the order of acquisition of individual slices, one of
        // "descending", "ascending", or "interleaved"
        "slice_order": "ascending",
        // specific absorption rate in watts per kilogram
        "SAR": 0.0830582,
        // the slice thickness in millimeters
        "slice_thickness": 1,
        // the start date and time for the overall acquisition, in the same format as study:start_time.
        "start_time": "20101125 150346.500000 ",
        // the transmit coil used in an MR acquisition.
        "transmit_coil": "Body",
        "varid": "MINC standard variable",
        "vartype": "group________",
        "version": "MINC Version    1.0",
        // A number specifying a linear conversion for the pixels. See DICOM (0020,1050)
        "window_center": 28,
        // A number specifying a linear conversion for the pixels. See DICOM (0020,1051)
        "window_width": 74
      },
      
      // GROUP
      "dicom_groups": {
        "data": 0,
        "varid": "MNI DICOM variable",
        "vartype": "group________"
      },
      
      // GROUP
      "dicominfo": {
        "data": 0,
        "image_type": "ORIGINAL\PRIMARY\M\ND\NORM",
        "varid": "MNI DICOM information variable",
        "vartype": "group________",
        "window_max": 811.5,
        "window_min": -39
      },
      
      // GROUPs
      // their name can varry from a min to another
      "dicom_0x0008" :{},
      "dicom_0x0018" :{},
      "dicom_0x0019" :{},
      "dicom_0x0020" :{},
      "dicom_0x0021" :{},
      "dicom_0x0023" :{},
      "dicom_0x0028" :{},
      "dicom_0x0029" :{},
      "dicom_0x0032" :{},
      "dicom_0x0040" :{},
      "dicom_0x0051" :{},
      
      // GROUP
      // These attributes, which provide identifying information about the patient or subject, are grouped with
      // the patient variable for purposes of namespace organization. They are modeled after ACR-NEMA
      // (ACR-NEMA committee, 1988) conventions for patient identification. All of these attributes are optional.
      "patient": {
        "data": 0,
        // the patient’s address.
        "address": "",
        "age": "038Y",
        "birthdate": "19721010",
        "full_name": "living_phantom_dcc_sd_20101125",
        "identification": "10.11.25-15:03:25-STD-1.3.12.2.1107.5.2.32.35056",
        "insurance_id": "",
        "other_ids": "",
        "other_names": "",
        // A string giving the patient’s position. See DICOM (0018,5100).
        "position": "HFS ",
        // the patient’s height or length in meters
        "size": 0,
        "sex": "male__",
        "varid": "MINC standard variable",
        "vartype": "group________",
        "version": "MINC Version    1.0",
        // weight in kilograms
        "weight": 80
      },
      
      // GROUP
      // These attributes provide ancillary information about the study for which the image was collected.
      // The attributes are grouped with the study variable for purposes of namespace organization,
      // and are modeled after ACR-NEMA conventions (ACR-NEMA committee, 1988).
      // Specific DICOM fields are cited by group and element number where appropriate.
      // All of these attributes are optional
      "study": {
        "data": 0,
        // A string description of the admitting diagnosis.
        "admitting_diagnosis": "",
        // the name of the physician administering the examination
        "attending physician": "",
        // the department conducting the study.
        "department": "",
        // the model of the imaging device
        "device_model": "TrioTim ",
        "field_value": 3,
        // institution conducting the study
        "institution": "Mc Gill University",
        // the imaging device manufacturer
        "manufacturer": "SIEMENS ",
        // imaging modality used, typically one of: 'PET__' , 'SPECT', 'GAMMA',
        // 'MRI__' , 'MRS__' , 'MRA__' 'CT___', 'DSA__' , 'DR___', or 'label'
        "modality": "MRI__",
        //name of the operator of the imaging device
        "operator": "RL",
        // description of the procedure employed
        "procedure": "Academic Research^Dr. Evans ",
        // the name of the radiologist interpreting the examination
        "radiologist": "",
        // the name of the patient’s primary physician
        "referring_physician": "",
        "serial_no": "35056 ",
        "software_version": "syngo MR B15",
        // A string giving the time and date of the start of the study, in the format YYYYMMDD
        // HHMMSS.FFFFFF, where FFFFFF is an string representation of fractional seconds. Either the entire
        // time representation, or the fractional seconds, may be omitted if not required.
        "start_date": "20101125",
        "start_time": "150346.500000 ",
        // the specific imaging system that generated the image
        "station_id": "MEDPC ",
        // A string identifying the study.
        "study_id": "20101124.150346",
        "varid": "MINC standard variable",
        "vartype": "group________",
        "version": "MINC Version    1.0"
      }
      
    }
    
  }
}
