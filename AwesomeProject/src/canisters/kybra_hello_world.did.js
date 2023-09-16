export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    'getUserScore' : IDL.Func([IDL.Text], [IDL.Int], ['query']),
    'setDecrementUserScore' : IDL.Func([IDL.Text], [], []),
    'setIncrementUserScore' : IDL.Func([IDL.Text], [], []),
    'verifyUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
