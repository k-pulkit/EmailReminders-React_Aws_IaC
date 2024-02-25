const schema = {
    type: 'object',
    properties: {
      messageid: { type: 'string' },
      timestamp: { type: 'integer' },
      subject: { type: 'string' },
      message: { type: 'string' },
      email: { type: 'string' },
      delay: { type: 'integer' },
      delayType: { type: 'string' },
    },
    required: ['messageid', 'timestamp', 'subject', 'message', 'email', 'delay', 'delayType'],
  };

module.exports = {schema}