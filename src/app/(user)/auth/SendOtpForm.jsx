import TextField from "@/ui/TextField"


function SendOtpForm({ onChange, phoneNumber, onSubmit, isPending }) {

  return (
    <div >
      <form onSubmit={onSubmit} className='space-y-8'>

        <TextField label="شماره موبایل" name="phoneNumber" value={phoneNumber}
          onChange={onChange} />
        <div>
          {
            isPending ? (
              <p>loading...</p>
            ) : (
              <button type='submit' className='btn btn--primary w-full'>

                تایید
              </button>
            )
          }
        </div>
      </form>

    </div>
  )
}

export default SendOtpForm
