using System;

namespace TIMS2_2__0.Data
{
    interface IDatabase : IDisposable
    {
        string ConnectionString { get; set; }
        string Database { get; }
        void Open();
        void Close();
    }
}
