// src/scenes/dashboard/PatientInformation.jsx
import React, { useState } from 'react';
import { Box, Paper, Typography, Avatar, Button, TextField, Grid } from '@mui/material';

const PatientInformation = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingRecord, setIsEditingRecord] = useState(false);
  const [isEditingTreatment, setIsEditingTreatment] = useState(false);
  const [isEditingPrescriptions, setIsEditingPrescriptions] = useState(false);
  const [isEditingDiagnostics, setIsEditingDiagnostics] = useState(false);
  const [isEditingImaging, setIsEditingImaging] = useState(false);
  const [isEditingMetrics, setIsEditingMetrics] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: 'Salinus',
    lastName: 'Abubakar',
    gender: 'Male',
    dob: '2nd Feb, 1997 (27 years)',
    phone: '08012345678',
    job: 'Architecture',
    bloodType: 'O-',
    allergies: 'None reported',
    address: 'Abuja FCT Garki, Area 11',
    nationality: 'Nigerian',
  });

  const [recordData, setRecordData] = useState({
    diagnosisDate: '02/05/2024',
    cancerType: 'Prostate Cancer, Stage III',
    treatmentHistory: 'Radical prostatectomy followed by androgen deprivation therapy (ADT)',
    currentTreatment: [
      { treatment: 'Scheduled for radical prostatectomy on', date: '5th May, 2024' },
      { treatment: 'Currently on androgen deprivation therapy (ADT) with lupron injection every 3 months' },
    ],
    medicalPrescriptions: [
      { name: 'Lupron (Leuprolide)', dosage: '22.5mg', frequency: 'Injection every 3 months for ADT' },
    ],
    labDiagnostics: [
      { name: 'PSA (Prostate-Specific-Antigen)', result: 'Elevated at 15ng/ml' },
      { name: 'Biopsy', result: 'Confirmed adenocarcinoma of the prostate Gleason Sum 7 (3+4)' },
    ],
    imaging: [
      { name: 'MRI of the Pelvis', result: 'Localized tumor within the prostate, no evidence of metastasis' },
      { name: 'Bone Scan', result: 'No evidence of metastasis' },
    ],
    generalMetrics: {
      height: '160cm',
      weight: '92kg',
      bmi: '21.2',
      bloodPressure: '124/80',
      bodyFatPercentage: '20%',
    },
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecordChange = (e) => {
    const { name, value } = e.target;
    setRecordData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, width: '25%', position: 'absolute', left: 0 }}>
      {/* Patient Profile Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="textSecondary">Patient Profile</Typography>
        <Button variant="contained" size="small" onClick={() => setIsEditingProfile(!isEditingProfile)}>
          {isEditingProfile ? 'Cancel' : 'Edit'}
        </Button>
      </Box>
      <Box display="flex" alignItems="center" mt={2}>
        <Avatar alt="Salinus Abubakar" src="/assets/user.png" sx={{ width: 80, height: 80, marginRight: 2 }} />
        <Box>
          <Typography variant="h6">Ibrahim Hassan</Typography>
          <Typography variant="subtitle1">ID # 3837939293</Typography>
        </Box>
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            value={profileData.firstName}
            onChange={handleProfileChange}
            name="firstName"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            value={profileData.lastName}
            onChange={handleProfileChange}
            name="lastName"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gender"
            value={profileData.gender}
            onChange={handleProfileChange}
            name="gender"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="DOB"
            value={profileData.dob}
            onChange={handleProfileChange}
            name="dob"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            value={profileData.phone}
            onChange={handleProfileChange}
            name="phone"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Job"
            value={profileData.job}
            onChange={handleProfileChange}
            name="job"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Blood Type"
            value={profileData.bloodType}
            onChange={handleProfileChange}
            name="bloodType"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Allergies"
            value={profileData.allergies}
            onChange={handleProfileChange}
            name="allergies"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address"
            value={profileData.address}
            onChange={handleProfileChange}
            name="address"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Nationality"
            value={profileData.nationality}
            onChange={handleProfileChange}
            name="nationality"
            variant="outlined"
            fullWidth
            InputProps={{
              readOnly: !isEditingProfile,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
        </Grid>
      </Grid>
      {isEditingProfile && (
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingProfile(false)}>
          Save
        </Button>
      )}

      {/* Patient Record Section */}
      <Box mt={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="textSecondary">Patient Record</Typography>
          <Button variant="contained" size="small" onClick={() => setIsEditingRecord(!isEditingRecord)}>
            {isEditingRecord ? 'Cancel' : 'Edit'}
          </Button>
        </Box>
        <TextField
          label="Diagnosis Date"
          value={recordData.diagnosisDate}
          onChange={handleRecordChange}
          name="diagnosisDate"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 2 }}
          InputProps={{
            readOnly: !isEditingRecord,
            style: { fontWeight: 'bold' },
          }}
          InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField
          label="Cancer Type"
          value={recordData.cancerType}
          onChange={handleRecordChange}
          name="cancerType"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 2 }}
          InputProps={{
            readOnly: !isEditingRecord,
            style: { fontWeight: 'bold' },
          }}
          InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField
          label="Treatment History"
          value={recordData.treatmentHistory}
          onChange={handleRecordChange}
          name="treatmentHistory"
          variant="outlined"
          fullWidth
          sx={{ marginTop: 2 }}
          InputProps={{
            readOnly: !isEditingRecord,
            style: { fontWeight: 'bold' },
          }}
          InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        {isEditingRecord && (
          <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingRecord(false)}>
            Save
          </Button>
        )}

        {/* Current Treatment Section */}
        <Box mt={4}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="textSecondary">Current Treatment</Typography>
            <Button variant="contained" size="small" onClick={() => setIsEditingTreatment(!isEditingTreatment)}>
              {isEditingTreatment ? 'Cancel' : 'Edit'}
            </Button>
          </Box>
          {recordData.currentTreatment.map((treatment, index) => (
            <TextField
              key={index}
              label={`Treatment ${index + 1}`}
              value={treatment.date ? `${treatment.treatment} on ${treatment.date}` : treatment.treatment}
              onChange={(e) => {
                const newTreatment = [...recordData.currentTreatment];
                newTreatment[index].treatment = e.target.value;
                setRecordData({ ...recordData, currentTreatment: newTreatment });
              }}
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingTreatment,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
          ))}
          {isEditingTreatment && (
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingTreatment(false)}>
              Save
            </Button>
          )}
        </Box>

        {/* Medical & Prescriptions Section */}
        <Box mt={4}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="textSecondary">Medical & Prescriptions</Typography>
            <Button variant="contained" size="small" onClick={() => setIsEditingPrescriptions(!isEditingPrescriptions)}>
              {isEditingPrescriptions ? 'Cancel' : 'Edit'}
            </Button>
          </Box>
          {recordData.medicalPrescriptions.map((prescription, index) => (
            <TextField
              key={index}
              label={`Prescription ${index + 1}`}
              value={`${prescription.name} ${prescription.dosage} ${prescription.frequency}`}
              onChange={(e) => {
                const newPrescriptions = [...recordData.medicalPrescriptions];
                newPrescriptions[index].name = e.target.value;
                setRecordData({ ...recordData, medicalPrescriptions: newPrescriptions });
              }}
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingPrescriptions,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
          ))}
          {isEditingPrescriptions && (
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingPrescriptions(false)}>
              Save
            </Button>
          )}
        </Box>

        {/* Lab Diagnostic Section */}
        <Box mt={4}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="textSecondary">Lab Diagnostic</Typography>
            <Button variant="contained" size="small" onClick={() => setIsEditingDiagnostics(!isEditingDiagnostics)}>
              {isEditingDiagnostics ? 'Cancel' : 'Edit'}
            </Button>
          </Box>
          {recordData.labDiagnostics.map((diagnostic, index) => (
            <TextField
              key={index}
              label={`Diagnostic ${index + 1}`}
              value={`${diagnostic.name} - ${diagnostic.result}`}
              onChange={(e) => {
                const newDiagnostics = [...recordData.labDiagnostics];
                newDiagnostics[index].name = e.target.value;
                setRecordData({ ...recordData, labDiagnostics: newDiagnostics });
              }}
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingDiagnostics,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
          ))}
          {isEditingDiagnostics && (
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingDiagnostics(false)}>
              Save
            </Button>
          )}
        </Box>

        {/* Imaging Section */}
        <Box mt={4}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="textSecondary">Imaging</Typography>
            <Button variant="contained" size="small" onClick={() => setIsEditingImaging(!isEditingImaging)}>
              {isEditingImaging ? 'Cancel' : 'Edit'}
            </Button>
          </Box>
          {recordData.imaging.map((image, index) => (
            <TextField
              key={index}
              label={`Imaging ${index + 1}`}
              value={`${image.name} - ${image.result}`}
              onChange={(e) => {
                const newImaging = [...recordData.imaging];
                newImaging[index].name = e.target.value;
                setRecordData({ ...recordData, imaging: newImaging });
              }}
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingImaging,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
          ))}
          {isEditingImaging && (
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingImaging(false)}>
              Save
            </Button>
          )}
        </Box>

        {/* General Patient Metrics Section */}
        <Box mt={4}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" color="textSecondary">General Patient Metrics</Typography>
            <Button variant="contained" size="small" onClick={() => setIsEditingMetrics(!isEditingMetrics)}>
              {isEditingMetrics ? 'Cancel' : 'Edit'}
            </Button>
          </Box>
          <TextField
            label="Height"
            value={recordData.generalMetrics.height}
            onChange={(e) => {
              const newMetrics = { ...recordData.generalMetrics, height: e.target.value };
              setRecordData({ ...recordData, generalMetrics: newMetrics });
            }}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
            InputProps={{
              readOnly: !isEditingMetrics,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
          <TextField
            label="Weight"
            value={recordData.generalMetrics.weight}
            onChange={(e) => {
              const newMetrics = { ...recordData.generalMetrics, weight: e.target.value };
              setRecordData({ ...recordData, generalMetrics: newMetrics });
            }}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
            InputProps={{
              readOnly: !isEditingMetrics,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
          <TextField
            label="BMI"
            value={recordData.generalMetrics.bmi}
            onChange={(e) => {
              const newMetrics = { ...recordData.generalMetrics, bmi: e.target.value };
              setRecordData({ ...recordData, generalMetrics: newMetrics });
            }}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
            InputProps={{
              readOnly: !isEditingMetrics,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
          <TextField
            label="Blood Pressure"
            value={recordData.generalMetrics.bloodPressure}
            onChange={(e) => {
              const newMetrics = { ...recordData.generalMetrics, bloodPressure: e.target.value };
              setRecordData({ ...recordData, generalMetrics: newMetrics });
            }}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
            InputProps={{
              readOnly: !isEditingMetrics,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
          <TextField
            label="Body Fat Percentage"
            value={recordData.generalMetrics.bodyFatPercentage}
            onChange={(e) => {
              const newMetrics = { ...recordData.generalMetrics, bodyFatPercentage: e.target.value };
              setRecordData({ ...recordData, generalMetrics: newMetrics });
            }}
            variant="outlined"
            fullWidth
            sx={{ marginTop: 2 }}
            InputProps={{
              readOnly: !isEditingMetrics,
              style: { fontWeight: 'bold' },
            }}
            InputLabelProps={{
              style: { color: 'grey' },
            }}
          />
          {isEditingMetrics && (
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingMetrics(false)}>
              Save
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default PatientInformation;