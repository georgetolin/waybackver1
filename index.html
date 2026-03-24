import React, { useState, useMemo } from 'react';
import { Search, Calendar, Archive, Zap, Globe } from 'lucide-react';

export default function WaybackMachine() {
  const [url, setUrl] = useState('');
  const [searchedUrl, setSearchedUrl] = useState('');
  const [selectedYear, setSelectedYear] = useState(null);

  // Mock data - snapshots for demonstration
  const mockSnapshots = useMemo(() => {
    if (!searchedUrl) return [];
    
    const years = [2005, 2008, 2012, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
    return years.map(year => ({
      year,
      count: Math.floor(Math.random() * 200) + 10,
      months: Array.from({ length: 12 }, (_, i) => Math.random() > 0.5 ? Math.floor(Math.random() * 30) + 1 : 0)
    }));
  }, [searchedUrl]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (url.trim()) {
      setSearchedUrl(url);
      setSelectedYear(null);
    }
  };

  const totalSnapshots = useMemo(() => {
    return mockSnapshots.reduce((sum, year) => sum + year.count, 0);
  }, [mockSnapshots]);

  const yearSnapshots = selectedYear ? mockSnapshots.find(y => y.year === selectedYear)?.count : 0;

  return (
    <div style={styles.container}>
      {/* Background effects */}
      <div style={styles.bgGradient}></div>
      <div style={styles.gridBg}></div>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <Archive size={28} style={{ color: '#00d4ff' }} />
            <span>Wayback</span>
          </div>
          <p style={styles.tagline}>Explore the internet's history</p>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Time Travel Through<br />
            <span style={styles.highlight}>The Web</span>
          </h1>
          <p style={styles.description}>
            See what websites looked like in the past. Explore billions of web pages saved over time.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} style={styles.searchForm}>
            <div style={styles.searchContainer}>
              <Search size={20} style={{ color: '#666' }} />
              <input
                type="url"
                placeholder="Enter a URL (e.g., example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={styles.searchInput}
              />
              <button type="submit" style={styles.searchButton}>
                <Zap size={18} />
                Search
              </button>
            </div>
          </form>

          {/* Stats */}
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <Globe size={16} />
              <span>3.7 Billion pages</span>
            </div>
            <div style={styles.statItem}>
              <Calendar size={16} />
              <span>Since 1996</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searchedUrl && (
        <section style={styles.resultsSection}>
          <div style={styles.resultsContainer}>
            <div style={styles.resultsHeader}>
              <div>
                <h2 style={styles.resultsTitle}>Snapshots of {searchedUrl}</h2>
                <p style={styles.resultsMeta}>
                  {totalSnapshots} captures across {mockSnapshots.length} years
                </p>
              </div>
              <div style={styles.clearButton} onClick={() => setSearchedUrl('')}>
                ✕
              </div>
            </div>

            {/* Timeline Visualization */}
            <div style={styles.timelineSection}>
              <h3 style={styles.timelineTitle}>Coverage Timeline</h3>
              <div style={styles.timeline}>
                {mockSnapshots.map((yearData, idx) => {
                  const isSelected = selectedYear === yearData.year;
                  const minYear = 2005;
                  const maxYear = 2024;
                  const position = ((yearData.year - minYear) / (maxYear - minYear)) * 100;
                  
                  return (
                    <div
                      key={yearData.year}
                      style={{
                        ...styles.timelineBar,
                        ...(isSelected ? styles.timelineBarActive : {}),
                        left: `${position}%`,
                        animation: `slideUp 0.6s ease-out ${idx * 0.02}s both`
                      }}
                      onClick={() => setSelectedYear(isSelected ? null : yearData.year)}
                      title={`${yearData.year}: ${yearData.count} snapshots`}
                    >
                      <div style={{
                        ...styles.timelineBarInner,
                        height: `${(yearData.count / 200) * 100}%`
                      }}></div>
                      <span style={styles.timelineYear}>{yearData.year}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Year Detail */}
            {selectedYear && (
              <div style={styles.yearDetail}>
                <div style={styles.yearDetailContent}>
                  <h3 style={styles.yearDetailTitle}>{selectedYear}</h3>
                  <p style={styles.yearDetailCount}>{yearSnapshots} snapshots captured</p>
                  
                  {/* Month Grid */}
                  <div style={styles.monthGrid}>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, idx) => {
                      const snapshotData = mockSnapshots.find(y => y.year === selectedYear)?.months[idx] || 0;
                      return (
                        <div
                          key={month}
                          style={{
                            ...styles.monthBox,
                            ...(snapshotData > 0 ? styles.monthBoxActive : {}),
                            opacity: snapshotData > 0 ? 0.8 : 0.3,
                            backgroundColor: snapshotData > 0 ? '#00d4ff' : 'rgba(100, 100, 100, 0.2)'
                          }}
                          title={`${month}: ${snapshotData} snapshots`}
                        >
                          <span style={styles.monthLabel}>{month}</span>
                          {snapshotData > 0 && <span style={styles.monthCount}>{snapshotData}</span>}
                        </div>
                      );
                    })}
                  </div>
                  
                  <button style={styles.viewButton}>
                    View All Snapshots from {selectedYear}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      {!searchedUrl && (
        <section style={styles.featuresSection}>
          <h2 style={styles.featuresSectionTitle}>Why Use Wayback?</h2>
          <div style={styles.featuresGrid}>
            {[
              { icon: <Archive size={24} />, title: 'See History', desc: 'Watch how websites evolved over 28 years' },
              { icon: <Calendar size={24} />, title: 'Choose a Date', desc: 'Browse snapshots from any month and year' },
              { icon: <Zap size={24} />, title: 'Instant Access', desc: 'View archived versions in seconds' },
              { icon: <Globe size={24} />, title: 'Comprehensive', desc: 'Billions of pages from around the world' }
            ].map((feature, idx) => (
              <div key={idx} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        body {
          font-family: 'Inter', sans-serif;
          color: #fff;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#0a0e27',
    position: 'relative',
    overflow: 'hidden',
    color: '#fff'
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: '10%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    zIndex: 0
  },
  gridBg: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(100, 150, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100, 150, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    zIndex: 1
  },
  header: {
    position: 'relative',
    zIndex: 10,
    padding: '24px 40px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    background: 'rgba(10, 14, 39, 0.8)',
    backdropFilter: 'blur(10px)'
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '24px',
    fontWeight: '700',
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '8px'
  },
  tagline: {
    fontSize: '14px',
    color: '#999',
    fontWeight: '400'
  },
  hero: {
    position: 'relative',
    zIndex: 5,
    padding: '80px 40px',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    animation: 'slideUp 0.8s ease-out'
  },
  title: {
    fontSize: '56px',
    fontWeight: '700',
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '20px',
    lineHeight: '1.1',
    letterSpacing: '-1px'
  },
  highlight: {
    background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  description: {
    fontSize: '18px',
    color: '#aaa',
    marginBottom: '40px',
    fontWeight: '300'
  },
  searchForm: {
    marginBottom: '40px'
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(0, 212, 255, 0.2)',
    borderRadius: '12px',
    padding: '12px 20px',
    gap: '12px',
    transition: 'all 0.3s ease',
    maxWidth: '500px',
    margin: '0 auto',
    cursor: 'text'
  },
  searchInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    fontFamily: "'Inter', sans-serif"
  },
  searchButton: {
    background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
    border: 'none',
    color: '#000',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    transition: 'transform 0.2s',
    fontFamily: "'Inter', sans-serif"
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    fontSize: '14px',
    color: '#999'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  resultsSection: {
    position: 'relative',
    zIndex: 5,
    padding: '60px 40px',
    background: 'linear-gradient(180deg, rgba(0, 212, 255, 0.05) 0%, transparent 100%)',
    borderTop: '1px solid rgba(0, 212, 255, 0.1)'
  },
  resultsContainer: {
    maxWidth: '1000px',
    margin: '0 auto'
  },
  resultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '40px',
    animation: 'slideUp 0.6s ease-out'
  },
  resultsTitle: {
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '8px'
  },
  resultsMeta: {
    fontSize: '14px',
    color: '#00d4ff'
  },
  clearButton: {
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666',
    transition: 'color 0.2s',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: 'rgba(100, 100, 100, 0.1)'
  },
  timelineSection: {
    marginBottom: '40px'
  },
  timelineTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#ccc',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  timeline: {
    position: 'relative',
    height: '120px',
    background: 'rgba(100, 100, 100, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '4px',
    overflow: 'hidden'
  },
  timelineBar: {
    position: 'absolute',
    width: '32px',
    bottom: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  timelineBarActive: {
    filter: 'brightness(1.2)'
  },
  timelineBarInner: {
    width: '100%',
    background: 'linear-gradient(180deg, #00d4ff 0%, #0099ff 100%)',
    borderRadius: '4px',
    minHeight: '8px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  timelineYear: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#999',
    whiteSpace: 'nowrap'
  },
  yearDetail: {
    background: 'rgba(0, 212, 255, 0.08)',
    border: '1px solid rgba(0, 212, 255, 0.2)',
    borderRadius: '12px',
    padding: '32px',
    marginTop: '20px',
    animation: 'slideUp 0.4s ease-out'
  },
  yearDetailContent: {
    maxWidth: '100%'
  },
  yearDetailTitle: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '8px'
  },
  yearDetailCount: {
    fontSize: '14px',
    color: '#00d4ff',
    marginBottom: '24px'
  },
  monthGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
    gap: '12px',
    marginBottom: '24px'
  },
  monthBox: {
    aspectRatio: '1',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    padding: '8px'
  },
  monthBoxActive: {
    border: '1px solid rgba(0, 212, 255, 0.5)'
  },
  monthLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#fff'
  },
  monthCount: {
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '4px'
  },
  viewButton: {
    width: '100%',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
    border: 'none',
    color: '#000',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'transform 0.2s',
    fontFamily: "'Inter', sans-serif"
  },
  featuresSection: {
    position: 'relative',
    zIndex: 5,
    padding: '80px 40px',
  },
  featuresSectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: "'Space Grotesk', sans-serif",
    textAlign: 'center',
    marginBottom: '40px'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    maxWidth: '1100px',
    margin: '0 auto'
  },
  featureCard: {
    background: 'rgba(0, 212, 255, 0.05)',
    border: '1px solid rgba(0, 212, 255, 0.1)',
    borderRadius: '12px',
    padding: '32px',
    transition: 'all 0.3s ease',
    animation: 'slideUp 0.6s ease-out',
    cursor: 'pointer'
  },
  featureIcon: {
    color: '#00d4ff',
    marginBottom: '16px',
    display: 'flex'
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: '12px'
  },
  featureDesc: {
    fontSize: '14px',
    color: '#999',
    fontWeight: '300'
  }
};
