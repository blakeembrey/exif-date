import { format, parse } from "./index";

describe("exif date", () => {
  it("should parse", () => {
    expect(parse("2016:07:11 21:33:20")).toEqual(
      new Date("2016-07-11T21:33:20.000Z")
    );
    expect(parse("2016:07:11 21:33:20.71")).toEqual(
      new Date("2016-07-11T21:33:20.071Z")
    );
    expect(parse("2015:03:19 19:03:50Z")).toEqual(
      new Date("2015-03-19T19:03:50.000Z")
    );
    expect(parse("2013:10:06 18:55:39.114")).toEqual(
      new Date("2013-10-06T18:55:39.114Z")
    );
    expect(parse("2016:08:22 13:41:47+10:00")).toEqual(
      new Date("2016-08-22T13:41:47.000+10:00")
    );
    expect(parse("2016:08:22 13:41:47-10:00")).toEqual(
      new Date("2016-08-22T13:41:47.000-10:00")
    );
    expect(parse("not a date").getTime()).toEqual(NaN);
  });

  it("should format", () => {
    expect(format(new Date("2016-07-11T21:33:20.000Z"))).toEqual(
      "2016:07:11 21:33:20"
    );
    expect(format(new Date("2016-07-11T21:33:20.155Z"), true)).toEqual(
      "2016:07:11 21:33:20.16"
    );
    expect(format(new Date("2016-07-11T21:33:20.155Z"), true, true)).toEqual(
      "2016:07:11 21:33:20.16Z"
    );
    expect(format(new Date("not a date"))).toEqual("");
  });
});
