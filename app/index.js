import React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const JobColumn = ({ title, jobs, color }) => (
  <View style={styles.column}>
    <Text style={[styles.columnTitle, { color }]}>{title}</Text>
    {jobs.map((job, index) => (
      <View key={index} style={styles.jobCard}>
        <Text style={styles.jobCompany}>{job.company}</Text>
        <Text style={styles.jobTitle}>{job.title}</Text>
      </View>
    ))}
  </View>
);

export default function JobBoardScreen() {
  const mockJobs = {
    wishlist: [
      { company: 'Google', title: 'Software Engineer' },
      { company: 'Facebook', title: 'Product Manager' },
    ],
    applied: [
      { company: 'Reddit', title: 'Senior Data Engineer' },
      { company: 'Expedia', title: 'Product Analyst' },
    ],
    interviewing: [
      { company: 'Pinterest', title: 'Backend Developer' }
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>All Your Jobs, In One Board</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <JobColumn title="Wishlist" jobs={mockJobs.wishlist} color="#007aff" />
        <JobColumn title="Applied" jobs={mockJobs.applied} color="#34c759" />
        <JobColumn title="Interviewing" jobs={mockJobs.interviewing} color="#ff9500" />
        {/* Add more columns as needed */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 40 },
  header: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center'
  },
  column: {
    width: 250,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },
  jobCard: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  jobCompany: {
    fontWeight: '600',
    fontSize: 14
  },
  jobTitle: {
    fontSize: 13,
    color: '#333'
  }
});


