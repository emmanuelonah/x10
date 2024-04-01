import { useState, useEffect } from 'react';

type ArgType = {
  isLoading: boolean;
  /**
   * @benefitOf the maximum time in milliseconds if the
   * side effect if not DoneLoading the loader will be shown
   */
  benefitOf?: number;
};

export const useBaseLogic = ({ isLoading, benefitOf = 2000 }: ArgType) => {
  const [loading, setLoading] = useState(false);

  /**
   * @isDoneLoading is a state that will be set to true to notify
   * the accessibility gadget users that loading is done
   */
  const [isDoneLoading, setDoneLoading] = useState(false);

  /**
   * Give the side effect a benefit of 20000ms to show the loader
   */
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) timer = setTimeout(() => setLoading(true), benefitOf);
    return () => clearTimeout(timer);
  });

  /**
   * Tell accessibility gadget users that loading is done
   */
  useEffect(() => {
    if (loading && !isLoading && !isDoneLoading) {
      setLoading(false);
      setDoneLoading(true);
    }
  }, [isDoneLoading, isLoading, loading]);

  /**
   * Turn isDoneLoading to false after 2000ms
   */
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDoneLoading) timer = setTimeout(() => setDoneLoading(false), 2000);
    return () => clearTimeout(timer);
  });

  return {
    loading,
    isDoneLoading,
  };
};
