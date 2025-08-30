useEffect(() => {
  const fetchAndUpdateAttacks = async () => {
    const result = await fetchAttacks();
    if (result.status === 'success') {
      setAttacks(result.data);
    }

    // Simulate periodic attack logging for demo
    const interval = setInterval(async () => {
      const newAttack = {
        type: ['SSH Brute Force', 'HTTP Scan', 'SQL Injection'][Math.floor(Math.random() * 3)],
        sourceIP: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        geo: ['US', 'CN', 'RU'][Math.floor(Math.random() * 3)],
      };
      const logResult = await logAttack(newAttack);
      if (logResult.status === 'success' && logResult.data) {
        setAttacks((prev) => [logResult.data, ...prev.slice(0, 9)]);
      }

      // Update threat level
      const highCount = attacks.filter((a) => a.severity === 'High').length;
      if (highCount > 3) {
        setThreatLevel('High');
      } else if (highCount > 1) {
        setThreatLevel('Medium');
      } else {
        setThreatLevel('Low');
      }
    }, 5000);

    return () => clearInterval(interval);
  };

  fetchAndUpdateAttacks();
}, [attacks]);